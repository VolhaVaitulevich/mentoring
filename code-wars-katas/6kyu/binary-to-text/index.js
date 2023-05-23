function binaryToString(binary) {
    if (!binary) return ''
    binary = binary.match(/.{1,8}/g) ?? []
    binary = binary.map(item => parseInt(item,2))
    binary = binary.map(item => String.fromCharCode(item))
    return binary.join('')
}

binaryToString('01001011010101000100100001011000010000100101100101000101')
