const debounce =  (fn= ()=>{}) => {
    let debounce: ReturnType<typeof setTimeout>;
    return  function () {
        clearTimeout(debounce);
        debounce = setTimeout(() => {
            fn()
        }, 1000)
    }
}

export default debounce