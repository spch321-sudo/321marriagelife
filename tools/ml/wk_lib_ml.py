import json,re,copy,sys
import os; MA=os.path.abspath(os.path.join(os.path.dirname(__file__),'..','..'))
SKIP={'ref','more','memT','v','mem'}
def load_en(w):
    for f in range(1,6):
        d=json.load(open('%s/en-s%d.json'%(MA,f)))
        if str(w) in d: return d[str(w)]
def walk(o,path=()):
    if isinstance(o,dict):
        for k,v in o.items():
            if k in SKIP or k=='passages' or k=='w': continue
            yield from walk(v,path+(k,))
    elif isinstance(o,list):
        for i,v in enumerate(o): yield from walk(v,path+(i,))
    elif isinstance(o,str): yield path,o
def collect(w):
    wk=load_en(w); return wk,list(walk(wk))
def setp(o,path,val):
    for k in path[:-1]: o=o[k]
    o[path[-1]]=val
