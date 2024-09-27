const shapesContainer = document.getElementById('shapesContainer')


shapesContainer.addEventListener('click', (event) =>{
    const currentShape = event.target.closest('.shapes')

    if(currentShape) {  
        const shape = currentShape.getAttribute('id')
        console.log(shape);

        switch(shape) {
            case 'triangle-container':
                handleInput('triangle',['Base','Height'],(inputs)=>{
                    const[Base,Height] = inputs.map(parseFloat)
                    const area = 0.5 * (Base * Height)
                    return `The area of triangle is ${area}`
                })
                break
            case 'circle-container':
                handleInput('circle',['Radius'],(inputs) => {
                    const Radius = parseFloat(inputs[0])
                    const area = Math.PI * Radius * Radius;
                    return `The area of circle is ${area}`
                })
                break
            case 'square-container': 
            handleInput('square',['Side'],(inputs) => {
                const Side = parseFloat(inputs[0])
                const area = Side * Side
                return `The area of square is ${area}`
            })
            break
        }
        
    }
})

function handleInput(shapeName,inputFields,calculateArea){
    shapesContainer.remove();    
    const heading = document.getElementById('heading')
    heading.innerText = `Enter the parameters of ${shapeName}`

    const formContainer = document.createElement('div')
    formContainer.classList.add('form-container')
    const form = document.createElement('form')
    form.classList.add('areaCalcForm')

    inputFields.forEach(fields =>{
        const fieldTitle = document.createElement('label')
        fieldTitle.textContent = `${fields}:`

        const inputParam = document.createElement('input')
        inputParam.type = 'text'
        inputParam.placeholder = `Enter the ${fields}`
        inputParam.classList.add('input-box')
        inputParam.required = true

        form.appendChild(fieldTitle)
        form.appendChild(inputParam)

    })

    const calculateBtn = document.createElement('button')
    calculateBtn.type = 'submit'
    calculateBtn.textContent = 'Calculate'
    form.appendChild(calculateBtn)

    formContainer.appendChild(form)
    document.body.appendChild(formContainer)
    

    form.addEventListener('submit', (event) => {
        event.preventDefault()
        const inputs = Array.from(form.querySelectorAll('.input-box')).map(inputParam => inputParam.value.trim())
        const isValid = inputs.every(input => /^[0-9]+(\.[0-9]+)?$/.test(input))

        if (isValid) {
            const result = calculateArea(inputs)
            displayResult(result,shapeName)
        } else {
            alert('Please enter numbers')
        }
    })

}

function displayResult(result,shapeName) {
    const FormContainer = document.querySelector('.form-container')
    FormContainer.innerHTML = ''
    const heading = document.getElementById('heading')
    heading.innerText = `Area of the ${shapeName}`
    const resultValue = document.createElement('h3')
    resultValue.classList.add('result-value')
    resultValue.textContent = result
    FormContainer.appendChild(resultValue)

    const homeBtn = document.createElement('button')
    homeBtn.textContent = 'home'
    homeBtn.classList.add('home-btn')
    FormContainer.appendChild(homeBtn)

    homeBtn.addEventListener('click', () => location.reload())

}




































