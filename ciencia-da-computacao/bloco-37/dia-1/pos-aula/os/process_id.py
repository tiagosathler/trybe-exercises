from time import sleep
from os import getpid


print(getpid())
sleep(20)

# usar em seguida, durante os 20s o comando:
#   ps aux | grep <PROCESS ID>
