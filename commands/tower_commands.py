


def get_towers_by_disks(disks:str)->list:

    number_of_disks =int(disks)
    disk_order=[]
    for i in range(number_of_disks):
        disk_order.append(i+1)
    return disk_order


