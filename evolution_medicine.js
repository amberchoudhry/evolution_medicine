$(function() {
    
    $('#main-box #dot-1').on('click',function(){
        $('#dialogue-box').toggle();
        clickedIsFalse();
        dot1();
    });
    
    $('#main-box #dot-2').on('click',function(){
        $('#dialogue-box').toggle();
        clickedIsFalse();
        dot2();
    });
    
    $('#main-box #dot-3').on('click',function(){
        $('#dialogue-box').toggle();
        clickedIsFalse();
        dot3();
    });
    
    $('#main-box #dot-4').on('click',function(){
        $('#dialogue-box').toggle();
        clickedIsFalse();
        dot4();
    });
    
    $('#main-box #dot-5').on('click',function(){
        $('#dialogue-box').toggle();
        clickedIsFalse();
        dot5();
    });
    
    $('#main-box #dot-6').on('click',function(){
        $('#dialogue-box').toggle();
        clickedIsFalse();
        dot6();
    });
    
  function clickedIsFalse(){
       $("#dialogue-box").css({'width': '100%',
                      'background-color': '#3A3A42',
                      'padding-top': '0px',
                      'padding-bottom': '50px'}); 
  }
 
  function dot1(){
      var $stuff;
       $stuff = '<img class = "new" src="images/aspirin.jpg">';
      $stuff += '<img class="old" src="images/hollspillstitle.png">';
       $stuff += '<img class="old" src="images/rheumaticfever.png">';
      $stuff = $stuff + '<p class="descript">The ad to the right was found in one of Frederick Douglass’ newspapers in 1853. The patient testimony explains that the 19 year-old girl was cured of Rheumatic Fever using the advertised medicine, Holloway’s pills. According to Mayoclinic.org, the symptoms of Rheumatic fever include joint pain, chest pain, a fever, chest pain, a rash, painless bumps under the skin, and uncontrollable movements. In this testimony, the girl’s illness caused her to not be able to move her limbs, which may have been caused by intense joint pain and possibly involuntary movements as a result of Rheumatic Fever as well. According to Mayoclinic.org, Rheumatic Fever is now incredibly rare, usually occurs in children between the ages of 5 and 15, and usually results from unsuccessfully being able to treat strep throat. The treatment today is a combination of antibiotics, anti-inflammatory pills, and anticonvulsant pills for the involuntary movements. Holloway’s pills would have to have performed all these functions in order to be “a perfect cure” of Rheumatic Fever, as the testimony in the ad claims.</p>';
      $("#dialogue-box").html($stuff);
}
    
function dot2(){
    $stuff = '<img class = "new" src="images/surgeon.jpg">';
    $stuff += '<img class="old" src="images/uterineprolapse.png">';
    $stuff = $stuff + '<p class="descript">This ad was taken from The North Star in 1851. It advertises a medical institution that uses a form of alternative medicine called a water cure. The method uses excessive bathing and washing with water to cure the patient’s illness. The ad claims that this method will cure  female patients of having a prolapsed uterus. According to mayoclinic.org, the symptoms of having a uterine prolapse include severe pelvic pain and urinary incontinence, both symptoms of uterine prolapse included in this ad. Fortunately, today women who suffer from uterine prolapse have more reliable options for treatment than going to a water cure institution. According to mayoclinic.org, the treatment for it today is to insert a device into the body to keep the uterus in place, or the patient may get surgery in more severe cases.</p>';
    $("#dialogue-box").html($stuff);
}
    
function dot3(){
    $stuff = '<img class = "new" src="images/modernleg.jpg">';
    $stuff += '<img class="old" src="images/legad.png">';
    $stuff = $stuff + '<p class="descript">This ad was taken from The North Star in 1851. It advertises a prosthetic leg, a technology that has become much more functional since the 1850s. According to science.howstuffworks.com, the demand for artificial limbs increased significantly in the 1840s because it became easier to perform amputation surgeries due to improvements in anesthesia technology. Artificial arms and legs could be strapped to the opposing arm or leg so that the artificial limb could move with the real limb’s movements. Today, prosthetic limbs can be controlled more easily. One way they can be controlled is by connecting cables from the prosthetic leg to the functional leg to control the movement similar to how bikes use cables to control the brakes (science.howstuffworks.com). They can also be controlled by motors or by detecting electric signals in the muscles left on the amputated leg, though prosthetic legs that work this way are more expensive.</p>';
    $("#dialogue-box").html($stuff);
}
    
function dot4(){
    $stuff = '<img class = "new" src="images/bandages.jpg">';
    $stuff += '<img class="old" src="images/burns.png">';
    $stuff = $stuff + '<p class="descript">This ad, taken from The North Star in 1850, promotes an ointment that claims to cure severe burns. In the case of the patient in this testimony, a young girl’s clothing caught on fire and burned until she was left with fatal burn wounds. According to mayoclinic.org, there are three kinds of burn wounds: first degree burns that only affect the skin’s surface, second degree burns that affect the surface under the skin known as the dermis, and third degree burns that go through the skin completely and can damage the nerves in the area. Third degree burns are the only ones that are potentially fatal, and are usually treated in modern times with skin grafts, which uses other pieces of skin to replace burn scars (mayoclinic.org). Ointments are used for first and second degree burns, but a third degree burn would most likely not improve much just by using an ointment. </p>';
    $("#dialogue-box").html($stuff);
}
    
function dot5(){
    $stuff = '<img class = "new" src="images/diuretics.jpg">';
    $stuff += '<img class="old" src="images/dropsy.png">';
    $stuff = $stuff + '<p class="descript">This ad was found in the newspaper The North Star in 1850. It is a testimonial of Holloway’s pills, which cured a condition referred to as dropsy for the patient. Dropsy is an old term for a condition known today as edema. According to Mayoclinic.org, edema is the swelling of body tissues. The swelling does not occur as a result of an injury, but on its own (mayoclinic.org). The swelling results from sitting for too long, side effects of certain medications such as steroids, being pregnant, or consuming too much salt (mayoclinic.org). The treatment for edema today are medications called diuretics, or pills that cause the patient to urinate more when there is too much fluid in the body (mayoclinic.org). Holloway’s pills would have to cause the patient to urinate more often in order to treat the patient. The patient did say that it took six weeks to be completely cured of dropsy, so that is probably how long it took to get rid of the excess fluids in his body completely.</p>';
    $("#dialogue-box").html($stuff);
}
    
function dot6(){
    $stuff = '<img class = "new" src="images/teeth.jpg">';
    $stuff += '<img class="old" src="images/dental.png">';
    $stuff = $stuff + '<p class="descript">This ad advertises a dentist who can put in dentures. It was taken from the newspaper The North Star in 1851. A metal smith named Claudius Ash redesigned dentures in 1820 to be made from a form of hardened rubber called vulcanite (premierexhibitions.com). Before 1820, dentures were either made from ivory or real teeth taken from dead bodies (premierexhibitions.com). Ash also added springs in each tooth for increased control while eating (premierexhibitions.com). After the beginning of the 20th century, plastic became the usual material for the teeth in dentures. The dentist in this ad most likely used Ash’s new dentures in his patient’s mouths. </p>';
    $("#dialogue-box").html($stuff);
}


});