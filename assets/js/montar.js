document.addEventListener('DOMContentLoaded', function() {
  let params = coDesExtract()
  let jogo = params['atv']
  console.log(params);
  console.log(jogo);

coDesReplace('.nome_esporte', jogo)


// // document.addEventListener('DOMContentLoaded', function() {
// //     var resps = [];
// //         $(document).on("click", ":submit", function(e) {
// //             var stuff = ($($email).val())
// //             resps = [JSON.stringify(stuff)];

// //             localStorage.setItem('EmailsStuff', JSON.stringify(resps));
// //     });
// // })

// let dict = [];
//         // example {id:1592304983049, title: 'Deadpool', year: 2015}
//         console.warn('salve salve');
//         const addMovie = (ev)=>{
//             ev.preventDefault(); 
//             console.warn('salve salveq'); //to stop the form submitting
//             let escolhas = {
//                 quando: document.getElementByname('quando').value,
//                 quem: document.getElementByname('quem').value,
//                 quando: document.getElementByname('quando').value,
//                 hora: document.getElementByname('hora').value
//             }
//             dict.push(escolhas);
//             document.forms[0].reset(); // to clear the form for the next entries
//             //document.querySelector('form').reset();
//             //for display purposes only
//             console.warn('added' , {dict} );
//             let pre = document.querySelector('#msg pre');
//             pre.textContent = '\n' + JSON.stringify(dict, '\t', 2);
//             //saving to localStorage
//             localStorage.setItem('MyMovieList', JSON.stringify(dict) );
//         }
//         document.addEventListener('DOMContentLoaded', ()=>{
//             document.getElementById('btn').addEventListener('click', addMovie);
//         });



// //         function objectifyForm(formArray) {//serialize data function

// //   var returnArray = {};
// //   for (var i = 0; i < formArray.length; i++){
// //     returnArray[formArray[i]['name']] = formArray[i]['value'];
// //   }
// //   return returnArray;
// // }