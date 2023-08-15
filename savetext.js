const textarea = document.querySelector("textarea"),
fileNameInput = document.querySelector(".file-name input"),
selectMenu = document.querySelector(".save-as select"),
saveBtn = document.querySelector(".save-btn");

selectMenu.addEventListener('change', ()=>{
    let selectedFormat = selectMenu.options[selectMenu.selectedIndex].text
    saveBtn.innerText = `Save As ${selectedFormat.split(" ")[0]} File`
});

saveBtn.addEventListener('click', ()=>{
    const blob = new Blob([textarea.value], {type: selectMenu.value})
    const fileurl = URL.createObjectURL(blob)
    let link = document.createElement('a')
    link.download = fileNameInput.value
    link.href = fileurl
    link.click()
});
