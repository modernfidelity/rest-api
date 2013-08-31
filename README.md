Rest API v.0.1
========

A simple api application to handle user, content and media data written in Node.js


Using : 

Express 
Cluster
Passport



Notes
----------

siege -c100 -t1M http://localhost:3000/

No Cluster 

** SIEGE 2.72
** Preparing 100 concurrent users for battle.
The server is now under siege...
Lifting the server siege...      done.

Transactions:		       10319 hits
Availability:		      100.00 %
Elapsed time:		       59.53 secs
Data transferred:	        1.67 MB
Response time:		        0.05 secs
Transaction rate:	      173.34 trans/sec
Throughput:		        0.03 MB/sec
Concurrency:		        9.31
Successful transactions:       10319
Failed transactions:	           0
Longest transaction:	        0.64
Shortest transaction:	        0.00


With Cluster

** SIEGE 2.72
** Preparing 100 concurrent users for battle.
The server is now under siege...
Lifting the server siege...      done.

Transactions:		       11125 hits
Availability:		      100.00 %
Elapsed time:		       59.17 secs
Data transferred:	        1.80 MB
Response time:		        0.02 secs
Transaction rate:	      188.02 trans/sec
Throughput:		        0.03 MB/sec
Concurrency:		        3.40
Successful transactions:       11125
Failed transactions:	           0
Longest transaction:	        0.76
Shortest transaction:	        0.00
