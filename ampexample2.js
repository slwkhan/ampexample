{\rtf1\ansi\ansicpg1252\cocoartf2578
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fmodern\fcharset0 Courier;\f1\froman\fcharset0 Times-Roman;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs24 \cf2 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 define(['pipAPI', '
\f1 https://slwkhan.github.io/ampexample/ampexample2.js
\f0 '], function(APIConstructor, ampExtension)\{\
\
	var API = new APIConstructor();\
	\
	\
	return ampExtension(\{\
		primeCats :  [\
			\{\
				nameForFeedback : 'Black people',  //Will be used in the user feedback \
				nameForLogging : 'Black people', //Will be used in the logging\
				//An array of all media objects for this category.\
				mediaArray : [\
				    \{image : 'b01.jpg'\}, \
					\{image : 'b02.jpg'\}, \
					\{image : 'b03.jpg'\}, \
					\{image : 'b04.jpg'\}, \
					\{image : 'b05.jpg'\}, \
					\{image : 'b06.jpg'\}, \
					\{image : 'b07.jpg'\}, \
					\{image : 'b08.jpg'\}, \
					\{image : 'b09.jpg'\}, \
					\{image : 'b10.jpg'\}, \
					\{image : 'b11.jpg'\}, \
					\{image : 'b12.jpg'\}]\
\
			\}, \
			\{\
				nameForFeedback : 'White people',  //Will be used in the user feedback \
				nameForLogging : 'White people', //Will be used in the logging\
				//An array of all media objects for this category.\
				mediaArray : [\
				    \{image : 'w01.jpg'\}, \
					\{image : 'w02.jpg'\}, \
					\{image : 'w03.jpg'\}, \
					\{image : 'w04.jpg'\}, \
					\{image : 'w05.jpg'\}, \
					\{image : 'w06.jpg'\}, \
					\{image : 'w07.jpg'\}, \
					\{image : 'w08.jpg'\}, \
					\{image : 'w09.jpg'\}, \
					\{image : 'w10.jpg'\}, \
					\{image : 'w11.jpg'\}, \
					\{image : 'w12.jpg'\}]\
			\}\
		],\
\
		examplePrimeStimulus : \
		\{\
			nameForLogging : 'examplePrime', //Will be used in the logging\
			//An array of all media objects for this category.\
			mediaArray : [\{image : 'ampchair.jpg'\}, \{image : 'amplamp.jpg'\}, \{image : 'ampumbrella.jpg'\}]\
		\},\
\
		base_url : \{//Where are your images at?\
			image : 'https://baranan.github.io/minno-tasks/images/ampImages'\
		\}\
	\});\
\});}