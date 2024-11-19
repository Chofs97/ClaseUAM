const audioTagsContainer = document.getElementById('audioTags');

// Crear dinámicamente 100 etiquetas de audio
for (let i = 1; i <= 30; i++) {
    const tagContainer = document.createElement('div'); // Contenedor para el audio y el texto
    tagContainer.classList.add('tag-container');

    // Crear el título de la etiqueta
    const tagLabel = document.createElement('p');
    tagLabel.textContent = `Audio ${i}`;
    tagContainer.appendChild(tagLabel);

    // Crear el elemento de audio
    const audioElement = document.createElement('audio');
    audioElement.classList.add('tag');
    audioElement.controls = true; // Agregar controles para reproducir/pausar
    audioElement.src = `https://evolution.voxeo.com/library/audio/prompts/numbers/${i}.wav`; // Ruta al archivo de audio
    audioElement.onerror = () => console.log(`Audio ${i} no encontrado`);

    // Añadir el audio y el título al contenedor
    tagContainer.appendChild(audioElement);
    audioTagsContainer.appendChild(tagContainer);
}


function openModal(imageSrc) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modalImage");

    modal.style.display = "flex"; // Muestra el modal
    modalImage.src = imageSrc;    // Asigna la imagen seleccionada al modal
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none"; // Oculta el modal
}

closeModal();