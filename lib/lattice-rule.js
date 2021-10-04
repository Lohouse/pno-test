function r1lr(z, n)
{
    return Array.from(new Array(n), (_, i) => z.map(zj => (i * zj) % n));
}

function divmap(a, n)
{
    return a.map(x => x/n);
}

module.exports = { r1lr, divmap };