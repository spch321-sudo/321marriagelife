import sys,json,re
sys.argv=[sys.argv[0]]+sys.argv[1:]
L=sys.argv[1]; refs=sys.argv[2:]
B=__import__('os').environ.get('BIBLE','/home/claude/spch321-sudo/bible')
BK={}
for part in ['law','hist','poet','proph','nt']: BK.update(json.load(open('%s/bible.%s.%s.json'%(B,L,part))))
def verses_of(book,ch):
    out={}; cur=None
    for para in BK[book][ch-1]:
        i=1 if (para and isinstance(para[0],str)) else 0
        while i+1<len(para):
            n,t=para[i],para[i+1]
            if isinstance(n,int) and isinstance(t,str):
                if n>0: cur=n
                if cur is not None and (n>0 or para[0]!='d'): out.setdefault(cur,[]).append(t)
                i+=2
            else: i+=1
    return out
for r in refs:
    b,c,v=r.split('.'); vs=verses_of(b,int(c)); print(r,'|',' '.join(x.strip() for x in vs.get(int(v),[])))
