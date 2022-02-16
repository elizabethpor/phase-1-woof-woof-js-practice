document.addEventListener('DOMContentLoaded', () => {

    const dogBar = document.getElementById('dog-bar');
    const dogInfo = document.getElementById('dog-info');

    fetch('http://localhost:3000/pups')
    .then(response => response.json())
    .then(dogs => renderDogs(dogs))

    function renderDogs(dogs) {
        dogs.forEach(dog => {
            const span = document.createElement('span');
            span.textContent = dog.name;
            dogBar.append(span);
            span.addEventListener('click', () => {
                showInfo(dog);
            });
        });
    };

    function showInfo(dog) {
        dogInfo.replaceChildren('');
        
        const dogImage = document.createElement('img');
        dogImage.src = dog.image;

        const dogName = document.createElement('h2');
        dogName.textContent = dog.name;

        const button = document.createElement('button');
        if (dog.isGoodDog === true) {
            button.textContent = 'Good Dog!'
        } else {
            button.textContent = 'Bad Dog!'
        };

        button.addEventListener('click', () => {
            if (button.textContent === 'Good Dog!') {
                button.textContent = 'Bad Dog!';
                dog.isGoodDog = false;
                console.log(dog.isGoodDog)
            } else if (button.textContent === 'Bad Dog!') {
                button.textContent = 'Good Dog!';
                dog.isGoodDog = true;
                console.log(dog.isGoodDog)
            }

            // fetch('http://localhost:3000/pups/${dog.id}'), {
            //     method: 'PATCH',
            //     headers: {
            //         'Content-type': 'application/json',
            //         'Accept': 'application/json'
            //     },
            //     body: JSON.stringify({isGoodDog: dog.isGoodDog})
            // }
            // .then(response => response.json())
            // .then(dog => console.log(dog))
        })

        dogInfo.append(dogImage, dogName, button);
    }
// got to the end of step 4, PATCH excluded




})