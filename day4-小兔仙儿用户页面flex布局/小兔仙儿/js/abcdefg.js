window.addEventListener('load',() => {
    let as = document.querySelectorAll('a')
    console.log(as.length)
    for (let i = 0; i < as.length; i++) {
        as[i].href = 'javascript:void(0);';
        as[i].addEventListener('click', () => {
            alert('网页尚未完成，更多内容敬请期待…')
        })
    }
    console.log(`
 /＼　　 　 ∠＿/
/　│　　 ／ 　／
│　Z ＿,＜　／ 　　/ \`
│　　　　　ヽ　  /　　 〉
Y　　　　　\`　  /　 　/
ｲ ●　､　●　⊂⊃ 〈　　/
()　 へ　　　　|　＼〈
>ｰ ､_　  ィ　  / ／ ／
/ へ　　 /　ﾉ＜|  ＼＼
ヽ_ﾉ　　(_／　 │／／
7　　　　　　　|／
＞―r￣￣\`ｰ―＿
    `)
})