## Caching 

#### The Memory Hierarchy 
- "By having effectively a pyramid of different forms of memory -- a small, fast memory and a large, slow one -- maybe we could somehow get the best of both." 
- Example: If you're researching a topic at a library, you check out the most relevant books that you need to refer to often from the library, but you certainly don't check out _every_ book. 
- Caches keep around frequently used information. 
- But, at a certain point, we hit the "memory wall": caches for caches, memory for memory's sake, e.g. a factory that doubles its manufactoring power, but has the same number of parts shipped to it from overseas every year. 

#### Eviction and Clairvoyance 
- Bélády's algorithm: when an algorithm knows what to expect, e.g. throw away what you will need furthest from now when clearing things out 
- Random eviction: throw things out randomly; sometimes this is actually not half bad compared to other choices 
- First-In, First-Out (FIFO): Get rid of whatever has been sitting around longest 
- Least Recently Used (LRU): The one that has gone the longest without being used 

#### Turning the Library Inside Out 
- How does this all apply to libraries? What sorting mechanism most increases circulation? 

#### Caching on the Home Front 
- Different closets and storage space as cache space 