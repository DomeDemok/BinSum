function feladat01(szinek) {

    if (szinek.lenght() < 2)
        return 0;

    return (2 ** szinek.lenght()) - szinek.lenght() - 1;
}