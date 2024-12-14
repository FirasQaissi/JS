

//============Main of WindowSubject==================
const main = document.getElementById('main');
main.style.display = 'flex'
main.style.width = '80%'
main.style.height = '80%'
main.style.flexDirection = 'row'
main.style.marginTop = '1%'
main.style.backgroundSize = 'Cover'
main.style.borderRadius = '20px'

//===================Inputs of The MainDiv============================
const inputs = document.getElementById('inputs')

inputs.style.display = 'flex'
inputs.style.width = '30%'
inputs.style.height = '80vh'
inputs.style.flexDirection = 'column'
inputs.style.marginTop = '1%'
inputs.style.backgroundSize = 'Cover'
inputs.style.gap = '15px'
inputs.style.fontSize = '27px'
inputs.style.justifyContent = 'Center'
inputs.style.alignItems = 'Center'
inputs.style.margin = 'Auto'
inputs.style.textAlign = 'Center'
inputs.style.marginBottom = '6%'
inputs.style.color = 'black'

//=========SubmitsDesign===============

const SubmitsDesign = document.getElementById('submits')
SubmitsDesign.style.display = 'flex'
SubmitsDesign.style.flexDirection = 'row'
SubmitsDesign.style.width = '20%'
SubmitsDesign.style.height = '10vh'
SubmitsDesign.style.justifyContent = 'Center'
SubmitsDesign.style.margin = 'Auto'
SubmitsDesign.style.gap = '15px'
SubmitsDesign.style.marginBottom = '4%'




//============Adds ManyOf Inputs & Labels to Html==================

const secondLabel = document.createElement('label')
secondLabel.innerHTML = 'רוחב'
inputs.appendChild(secondLabel)
document.body.appendChild(main)



const firstInput = document.createElement('input')

inputs.appendChild(firstInput)
document.body.appendChild(main)



const thirdLabel = document.createElement('label')
thirdLabel.innerHTML = 'גובה'
inputs.appendChild(thirdLabel)
document.body.appendChild(main)


const secondInput = document.createElement('input')
secondInput.innerHTML = ''
inputs.appendChild(secondInput)
document.body.appendChild(main)


const fourthLabel = document.createElement('label')
fourthLabel.innerHTML = 'תוכן   '
inputs.appendChild(fourthLabel)
document.body.appendChild(main)


const textArea = document.createElement('TextArea')
textArea.innerHTML = ''
inputs.appendChild(textArea)
document.body.appendChild(main)

const TextColorLabel = document.createElement('label')
TextColorLabel.innerHTML = 'צבע הגופן  '
inputs.appendChild(TextColorLabel)
document.body.appendChild(main)


const fontColorInput = document.createElement('input')
fontColorInput.innerHTML = ''
inputs.appendChild(fontColorInput)
document.body.appendChild(main)

const fontSizeLabel = document.createElement('label')
fontSizeLabel.innerHTML = 'גודל הגופן  '
inputs.appendChild(fontSizeLabel)
document.body.appendChild(main)

const fontSizeInput = document.createElement('input')
fontSizeInput.innerHTML = ''
inputs.appendChild(fontSizeInput)
document.body.appendChild(main)

const kindOfFont = document.createElement('label')
kindOfFont.innerHTML = 'סוג הגופן  '
inputs.appendChild(kindOfFont)
document.body.appendChild(main)

const kindOfFontInput = document.createElement('input')
kindOfFontInput.innerHTML = ''
inputs.appendChild(kindOfFontInput)
document.body.appendChild(main)


const left = document.getElementById('left')
const oneinput = document.getElementById('one')
function addone() {



    const kindOf = document.createElement(oneinput.value)
    kindOf.innerHTML = textArea.value
    left.appendChild(kindOf)



}











