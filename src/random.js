function Randomize() {
	return Array.apply(0, Array(16)).map(function() {
    return (function(charset){
        return charset.charAt(Math.floor(Math.random() * charset.length))
    }('abcdefghijklmnopqrstuvwxyz-'));
	}).join('')
}

export default Randomize
