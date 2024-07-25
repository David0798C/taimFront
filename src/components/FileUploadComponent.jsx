import { useRef } from 'react';


const FileUploadComponent = ({ userId }) => {
    const fileInputRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        const file = fileInputRef.current.files[0];
        formData.append("file", file);
        console.log('3333333333333', file)

        try {
            const response = await fetch("http://localhost:8080/upload/" + userId, {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Error en la respuesta del servidor');
            }

            // const data = await response.json();
            alert("Imagen cargada con éxito");
        } catch (error) {
            console.log("Error al cargar la imagen", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} id="fileUploadForm" method="post">
            <input type="file" name="file" ref={fileInputRef} id="file" />
            <button type="submit">Enviar</button>
        </form>
    );
};

export default FileUploadComponent;
