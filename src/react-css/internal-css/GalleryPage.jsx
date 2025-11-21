export default function GalleryPage() {
    /* Internal CSS */
    const headingStyle = {
        color: "white",
        backgroundColor: "orange",
        textAlign: "center"
    };

    const bodyContentStyle = {
        backgroundColor: "#ffe7cc",
        padding: "10px",
        color: "black"
    };

    return (
        <div className="base-container">
            <h1 style={headingStyle}> Gallery </h1>
            <p style={bodyContentStyle}>
                Enjoy a collection of our best project photos and creative designs.
            </p>
        </div>
    );
}