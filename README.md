# _Mr. Rogers Neighborhoood_

#### By _**Jacob Wilson**_

#### _A brief description of the project._

## Technologies Used

* _HTML_
* _JavaScript_
* _CSS_
* _Markdown_
* _Bootstrap_
* _JQuery_

## Description

_A detailed description of the project._

## Setup/Installation Requirements

{Leave nothing to chance!}
{BE MORE SPECIFIC HERE}
* _You can find the github repository [here](https://github.com/JLEWilson/mr_rogers_neighborhood.git)_
* _Clone the repository to your computer_
* _Open the index.html file in a browser_
* _OR_
* _You can find the project on github pages[here]()_

## Known Bugs

* _No known bugs_

## Tests

Describe: beepBoopify()

Test: "It should return the number that is input"
Code: beepBoopify(123);
Output: 123

Test: "It should return a range of numbers from 0 to the input"
Code: beepBoopify(5);
Output: 0, 1, 2, 3, 4, 5

Test: "It should change 1 to "Beep!"
Code: beepBoopify(5);
Output: 0, "Beep!", 2, 3, 4, 5

Test: "It should change any number containing a 1 to "Beep!"
Code: beepBoopify(12);
Output: 0, "Beep!", 2, 3, 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Beep!"
Note: Created contains1() here

Test: "It should change 2 to "Beep!"
Code: beepBoopify(5);
Output: 0, "Beep!", "Boop!", 3, 4, 5

Test: "It should change any number containing 2 to "Beep!"
Code: beepBoopify(5);
Output: 0, "Beep!", "Boop!", 3, 4, 5
Note: DRY'd, changing contains1() to containsX() to account for any value.

Test: "It should change any number containing 3 to "Won't you be my neighbor?!"
Code: beepBoopify(3);
Output: 0, "Beep!", "Boop!", "Won't you be my neighbor?"
Note: Since code was DRY'd containsX already accounts for it in any digit

Test: "It should prioritize 3 then 2 then 1"
Code: beepBoopify(13)
Output: 0, "Beep!", "Boop!", "Won't you be my neighbor?" ... 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?"

Describe contains1()
Note: Not in final product

Test: It should return true if the input is a 1
Code: contains1(1);
Output: true;

Test: It should return true if any digit in the input is a 1
Code: contains1(41);
Output: true;

Describe containsX()

Test: It should return true if the input is a X
Code: contains1(12, 12);
Output: true;

Test: It should return true if any digit in the input is X
Code: contains1(12345, 3);
Output: true;

## Licence - [MIT](https://opensource.org/licenses/MIT)

_If you run into any problems or find a bug, would like to reach me for a seperate reason, feel free to send me an email @jacobleeeugenewilson@gmail.com with details of your issue._

Copyright (c) _Date_ _Jacob Wilson(s)_