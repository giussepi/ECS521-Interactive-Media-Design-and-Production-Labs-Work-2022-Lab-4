window.addEventListener('load', function() {

    ///////////////////////////////////////////////////////////////////////////
    //                           TODO: QUESTION 1                            //
    ///////////////////////////////////////////////////////////////////////////
    function process_text() {
	// Add button and textarea elements below
	let btn = document.getElementById('count_btn');
	let txt_field = document.getElementById('input_txt');

	btn.onclick = function() {
	    // Add code to count the number of vowels in the input text
	    let txt = txt_field.value;
	    const vowels = ['a', 'e', 'i', 'o', 'u'];

	    // Add your code below ////////////////////////////////////////////





	};
    }

    process_text();

    ///////////////////////////////////////////////////////////////////////////
    //                           TODO: QUESTION 2                            //
    ///////////////////////////////////////////////////////////////////////////
    let input_fname2 = document.getElementById('todo2_fname');
    let input_lname2 = document.getElementById('todo2_lname');
    let input_age2 = document.getElementById('todo2_age');
    let btn_display2 = document.getElementById('todo2_display');
    let btn_rm_lastname2 = document.getElementById('todo2_remove_lastname');
    let btn_clr_local_storage2 = document.getElementById('todo2_clear_local_storage');

    if (typeof(Storage) !== "undefined") {
	// Add your code below ////////////////////////////////////////////////





    } else {
	alert('Sorry! No Web Storage support...');
    }

    ///////////////////////////////////////////////////////////////////////////
    //                           TODO: QUESTION 3                            //
    ///////////////////////////////////////////////////////////////////////////
    let input_fname3 = document.getElementById('todo3_fname');
    let input_lname3 = document.getElementById('todo3_lname');
    let input_age3 = document.getElementById('todo3_age');
    let btn_display3 = document.getElementById('todo3_display');
    let btn_rm_firstname3 = document.getElementById('todo3_remove_firstname');
    let btn_clr_session_storage3 = document.getElementById('todo3_clear_session_storage');

    if (typeof(Storage) !== "undefined") {
	// Add your code below ////////////////////////////////////////////////





    } else {
	alert('Sorry! No Web Storage support...');
    }

});
