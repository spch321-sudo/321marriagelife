import sys; sys.path.insert(0,__import__('os').path.dirname(__import__('os').path.abspath(__file__)))
from wk_lib_ml import *
w=int(sys.argv[1]); wk,items=collect(w)
for i,(p,s) in enumerate(items): print('%d\t%s'%(i,s))
