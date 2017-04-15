String.prototype.parseSexpr = function () {
    var t = this.match(/\s*("[^"]*"|\(|\)|"|[^\s()"]+)/g)
    for (var o, c = 0, i = t.length - 1; i >= 0; i--) {
        var n, ti = t[i].trim()
        if (ti == '"') return
        else if (ti == '(') t[i] = '[', c += 1
        else if (ti == ')') t[i] = ']', c -= 1
        else if ((n = +ti) == ti) t[i] = n
        else t[i] = '\'' + ti.replace('\'', '\\\'') + '\''
        if (i > 0 && ti != ']' && t[i - 1].trim() != '(') t.splice(i, 0, ',')
        if (!c) if (!o) o = true; else return
    }
    return c ? undefined : eval(t.join(''))
}

Array.prototype.sumEven = function () {
    var sum = 0
    for (var i = 0; i < this.length; i++) {
        if (i % 2 == 1) {
            sum += this[i]
        }
    }
    return sum
}

function test(input) {
    var data = input.replace(/\r?\n|\r/g, '').split(/\s+(.*)/, 2)
    var tree = data[1].parseSexpr()
    if (tree.length == 0) {
        return 'no'
    }
    return hasSum(tree, data[0])
}

function hasSum(tree, value) {
    var sums = []
    var paths = []
    var i = 0
    path(tree, paths, i, sums)
    console.log(sums)
    for (var j = 0; j < sums.length; j++) {
        if (sums[j] == value) {
            return 'yes'
        }
    }
    return 'no'
}

function path(node, paths, i, sums) {
    if (node.length == 0) return
    paths[i] = node[0]
    i++
    if (node[1].length == 0 && node[2].length == 0) {
        console.log(paths)
        sums.push(paths.sumEven())
    }
    else {
        path(node[1], paths.slice(), i, sums)
        path(node[2], paths.slice(), i, sums)
    }
}
