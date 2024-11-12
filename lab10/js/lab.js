
function generateRandomText() {
    const text = "I dont like cats and they dont like me. I used to be allergic to them and I would get stuffed up and have hives. That doesnt seem to happen anymore. But I still dont like them. I lived with 3 cats that were not good at peeing in the litter box. They seemed to find something important to me and pee on it. Most of the time they peed on photographs or papers that would be ruined. Cats also bring fleas into the house. There is nothing worse than having to flea dip cats and also flea bomb a home. That is why I dont like cats.";
    const min = 3;
    const max = 100;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    
    return text.slice(randStart, randStart + randLen);
  }

$("#convo-button").click(function(){
    const newText = generateRandomText();
    $("#output").append('<div class="text"><p>' + newText + '</p></div>');
});

