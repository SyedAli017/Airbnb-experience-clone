import "./image-grid.css";
import imageGrid from "../../images/image-grid.png" ;

const ImageGrid = () => {
    return (
        <div className="image-grid-container">
            <img className="image-grid" src={imageGrid} alt="Image Grid" />
        </div>
    )
}

export default ImageGrid;