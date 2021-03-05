define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/amp/qualtrics/qamp.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();


	return ampExtension({
		primeCats :  [
			{
				nameForFeedback : 'Black people',  //Will be used in the user feedback
				nameForLogging : 'Black people', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {image : 'b1.jpg'},
					{image : 'b2.jpg'},
					{image : 'b3.jpg'},
					{image : 'b4.jpg'},
					{image : 'b5.jpg'},
					{image : 'b6.jpg'},
					{image : 'b7.jpg'},
					{image : 'b8.jpg'},
					{image : 'b9.jpg'},
					{image : 'b10.jpg'},
					{image : 'b11.jpg'}]

			},
			{
				nameForFeedback : 'White people',  //Will be used in the user feedback
				nameForLogging : 'White people', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {image : 'w1.jpg'},
					{image : 'w2.jpg'},
					{image : 'w3.jpg'},
					{image : 'w4.jpg'},
					{image : 'w5.jpg'},
					{image : 'w6.jpg'},
					{image : 'w7.jpg'},
					{image : 'w8.jpg'},
					{image : 'w9.jpg'},
					{image : 'w10.jpg'},
					{image : 'w11.jpg'}]
			}
		],

		examplePrimeStimulus :
		{
			nameForLogging : 'examplePrime', //Will be used in the logging
			//An array of all media objects for this category.
			mediaArray : [{image : 'n1.jpg'}, {image : 'n2.jpg'}, {image : 'n3.jpg'}]
		},

		base_url : {//Where are your images at?
			image : 'https://www.andrewamiles.com/ewExternalFiles'
		}
	});
});