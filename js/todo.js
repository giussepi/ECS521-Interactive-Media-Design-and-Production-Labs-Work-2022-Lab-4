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

    // VERY IMPORTANT NOTE: ///////////////////////////////////////////////////
    // Read the following functions meticulously. You must understand them entirely
    // because you have to use them to solve this question properly

    /**
     * Assigns an empty string to all the input text variables stored in localStorage
     */
    const after_clear_local_storage_handler = function() {
	localStorage.fname2 = localStorage.lname2 = localStorage.age2 = '';
    };

    /**
     * Returns a string without extra whitespaces
     * @param  {String} str   input string
     * @return {String}       clean string
     */
    const clean_string = (str) => str.trim().split(/\s+/).join(" ");

    /**
     * Returns an updated array of Element objects from all input texts for Q2
     * @return {Array}           updated input text elements
     */
    const get_input_elements_q2 = function(){
	return [
	    document.getElementById('todo2_fname'),
	    document.getElementById('todo2_lname'),
	    document.getElementById('todo2_age')
	];
    };

    /**
     * Updates the provided property from localStorage with the clean value of the provided input
     * @param {Element} input              Element object
     * @param {String}  storage_property   localStorage property
     */
    function update_local_storage(input, storage_property) {
	// Write the correct logic below following the function description from the docstring

    }


    // appying destructuring assignment
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    let [input_fname2, input_lname2, input_age2] = get_input_elements_q2();
    let prefix = '[FROM STORAGE]: ';
    let btn_save2 = document.getElementById('todo2_save');
    let btn_rm_lastname2 = document.getElementById('todo2_remove_lastname');
    let btn_clr_local_storage2 = document.getElementById('todo2_clear_local_storage');

    if (typeof(Storage) !== "undefined") {
	btn_save2.onclick = function() {
	    // write code get updated Element objects for all the inputs


	    // Uncomment the following lines and provide the proper arguments to the
	    // update_local_storage function to update the storage related to the three inputs
	    // update_local_storage(<input>, <storage_propery>);
	    // update_local_storage(<input>, <storage_propery>);
	    // update_local_storage(<input>, <storage_propery>);


	    // Write code to Update the input texts from the HTML form


	};

	btn_rm_lastname2.onclick = function() {
	    // Write some code below

	};

	btn_clr_local_storage2.onclick = function() {
	    // Write some code below

	};

    } else {
	alert('Sorry! No Web Storage support...');
    }

    ///////////////////////////////////////////////////////////////////////////
    //                           TODO: QUESTION 3                            //
    ///////////////////////////////////////////////////////////////////////////

    // Write here any new function


    /**
     * Returns an updated array of Element objects from all input texts for Q3
     * @return {Array}           updated input text elements
     */
    const get_input_elements_q3 = function(){
	return [
	    document.getElementById('todo3_fname'),
	    document.getElementById('todo3_lname'),
	    document.getElementById('todo3_age')
	];
    };

    let [input_fname3, input_lname3, input_age3] = get_input_elements_q3();
    let btn_save3 = document.getElementById('todo3_save');
    let btn_rm_firstname3 = document.getElementById('todo3_remove_firstname');
    let btn_clr_session_storage3 = document.getElementById('todo3_clear_session_storage');

    if (typeof(Storage) !== "undefined") {
	// Write some code below

    } else {
	alert('Sorry! No Web Storage support...');
    }

});
