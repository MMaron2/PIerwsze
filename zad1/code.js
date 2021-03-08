const oblicz = () => {
    let a = parseInt(prompt("podaj bok a:"))
    let b = parseInt(prompt("podaj bok b:"))
    let c = parseInt(prompt("podaj bok c:"))
    let p = (a+b+c)/2
    let P = Math.sqrt(p*(p-a)*(p-b)*(p-c))
    if (a+b > c && a + c > b && c + b > a) {
        document.querySelector(".wynik").textContent = `Pole trójkąca a b c wynosi: ${P.toFixed(2)}`
    } else {
        alert("z podanych boków nie da sie utworzyć trójkąta")
    }
    
}