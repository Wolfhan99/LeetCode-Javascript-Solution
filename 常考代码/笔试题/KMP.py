def gen_pnext(subString):
    index, m = 0, len(subString)
    pnext = [0] * m
    i = 1
    while i < m:
        if(subString[i] == subString[index]):
            pnext[i] = index + 1
            index += 1
            i += 1
        elif (index != 0):
            index = pnext[index-1]
        else:
            pnext[i] = 0
            i += 1
    return pnext


def KMP(string, subString):
    pnext = gen_pnext(subString)
    n = len(string)
    m = len(subString)
    i, j = 0, 0
    while (i < n) and (j < m):
        if(string[i] == subString[j]):
            i += 1
            j += 1
            print(j-1)
        elif (j != 0):
            j = pnext[j-1]
            print(j)
        else:
            i += 1
            # print(j)
    if(j == m):
        return i-j
    else:
        return -1


if __name__ == "__main__":
    string = 'alb1albanialbaalbaniarfgh'
    substring = 'albania'
    print(gen_pnext(substring))
    out = KMP(string, substring)
    print("Found at: %d" % out)
