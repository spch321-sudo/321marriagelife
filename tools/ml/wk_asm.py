import sys,json; sys.path.insert(0,__import__('os').path.dirname(__import__('os').path.abspath(__file__)))
from wk_lib_ml import *
w=int(sys.argv[1]); STG=int(sys.argv[2]) if len(sys.argv)>2 else 1; wk,items=collect(w)
import copy,os
for L in ['ja','ko','id','ceb']:
    t={}
    for ln in open(os.path.join(os.path.dirname(os.path.abspath(__file__)),'wk',L,'%d.txt'%w),encoding='utf8'):
        i,s=ln.rstrip('\n').split('\t',1); t[int(i)]=s
    assert len(t)==len(items),(L,len(t),len(items))
    o=copy.deepcopy(wk)
    for i,(p,s) in enumerate(items): setp(o,p,t[i])
    fn='%s/%s-s%d.json'%(MA,L,STG)
    import os
    d=json.load(open(fn)) if os.path.exists(fn) else {}
    d[str(w)]=o
    json.dump(d,open(fn,'w'),ensure_ascii=False,separators=(',',':'))
    print(L,'ok')
