async function getData() {
    try{
        const result=await axios.get('http://localhost:3000/user/get-expense');
        result.data.allexpense.forEach(element => {
            showItems(element);
        });
    }catch(err){
        console.log(err)
    }
    
}
getData();

async function postData(obj) {
    try{
        const response= await axios.post("http://localhost:3000/user/add-expense",obj);
            showItems(response.data.expense);
        }catch(err){
       console.log("ERROR in postData",err);
    }
    
}

async function Remove(obj) {
    try{
        let result=await axios.delete(`http://localhost:3000/user/delete-expense/${obj.id}`);
        console.log(result);
    }catch(err){
        console.log("Cannot be deleted",err);
    } 
   
}

const formsubmit=document.querySelector('form');
formsubmit.addEventListener('submit',(event)=>{
    event.preventDefault();
    const amt=event.target.amount.value;
    const des=event.target.description.value;
    const cat=event.target.category.value;
    const obj={
        amount:amt,
        description:des,
        category:cat
    }
    postData(obj); 
    document.getElementById('amount').value="";
    document.getElementById('description').value="";
    document.getElementById('category').value="";
})

function showItems(obj){
    const Li=document.querySelector('ul');
    const newLi=document.createElement('li');
    newLi.textContent=obj.amount+'-'+obj.description+'-'+obj.category;
    const dltbtn=document.createElement('button');
    dltbtn.textContent='Delete Expense';
    dltbtn.type="button";
    dltbtn.id="dlt";
    newLi.appendChild(dltbtn);
    const edtbtn=document.createElement('button');
    edtbtn.textContent='Edit Expense';
    edtbtn.type='button';
    edtbtn.id='edt';
    newLi.appendChild(edtbtn);
    Li.appendChild(newLi);
    dltbtn.addEventListener('click',(event)=>{
        event.preventDefault();
        const parenElem=event.target.parentElement;
        parenElem.remove();
        Remove(obj);
    })
    edtbtn.addEventListener('click',(event)=>{
        event.preventDefault();
        const Amt=document.getElementById('amount');
        const Des=document.getElementById('description');
        const Cat=document.getElementById('category');
        Amt.value=obj.amount;
        Des.value=obj.desciption;
        Cat.value=obj.category;
        const parenElem=event.target.parentElement;
        parenElem.remove();
        Remove(obj);
    })
}