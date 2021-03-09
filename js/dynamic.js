var cars={
    sedan:['Honda city', 'Hyundai verna', 'Suzuki SX4'],
    suv:['Mahindra Bolder', 'Tata sumo', 'Toyato Innova'],
    hatchback:['Honda Brv', 'Tata Indigo', 'Hyundai I20']
}

// gettign the main and sub menus


var main= document.getElementById('main_menu');
var sub = document.getElementById('sub_menu');


// Triger the Event when main menu change occurs

main.addEventListener('change', ()=>{
    sub.innerHTML = ''
    let arr = cars[main.value]
    arr.forEach((item)=>{
      sub.append(new Option(item, item))
    })
  })
// removing the sub menu options using  while loop
while (sub.options.length > 0){
    sub.options.remove(0);
}

//conver the selected object into array and create a options for each array elements
// using Option constructor it will create htlml

Array.from(selected_option).forEach(function(el){
    let option = new Option(el, el);
    sub.appendChild(option)
});

});