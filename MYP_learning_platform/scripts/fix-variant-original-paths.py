import os, re, json, glob, sys

def resolve_figs(qts):
    mP = re.search(r"const P = '([^']+)'", qts)
    P = mP.group(1) if mP else None
    figs = []
    for block in re.findall(r'figImages:\s*\[([^\]]*)\]', qts):
        for f in re.findall(r'[`\'"]([^`\'"]*?\.(?:png|svg|jpg))[`\'"]', block):
            f2 = f.replace('${P}', P) if (P and '${P}' in f) else f
            figs.append(f2)
    return figs

def stem_noext(p): return re.sub(r'\.(svg|png|jpg)$','', os.path.basename(p))

def common_prefix_len(a,b):
    n=0
    for x,y in zip(a,b):
        if x==y: n+=1
        else: break
    return n

changed_total=0
target = sys.argv[1] if len(sys.argv)>1 else ''
for sc in sorted(glob.glob("data/papers/*-v[12]/image-classifications.json")):
    pid = os.path.basename(os.path.dirname(sc))
    if target and not pid.startswith(target): continue
    qf = f"data/papers/{pid}/questions.ts"
    if not os.path.exists(qf): continue
    figs = resolve_figs(open(qf).read())
    fig_by_stem = {stem_noext(f): f for f in figs}
    ents = json.load(open(sc))
    ch=0
    for e in ents:
        if not e.get('generated_path'): continue
        gstem = stem_noext(e.get('generated_path',''))
        # exact stem match first, else best prefix match (len>=4)
        match = fig_by_stem.get(gstem)
        if not match:
            best=None; bestlen=3
            for fs,fp in fig_by_stem.items():
                l=common_prefix_len(gstem,fs)
                if l>bestlen: best=fp; bestlen=l
            match=best
        if match and e.get('original_path')!=match:
            e['original_path']=match; ch+=1
    if ch:
        json.dump(ents, open(sc,'w'), indent=2, ensure_ascii=False)
        changed_total+=ch
        print(f"  {pid}: fixed {ch} original_path(s)")
print(f"total fixed: {changed_total}")
