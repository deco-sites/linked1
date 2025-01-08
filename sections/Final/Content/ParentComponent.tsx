import { useState } from "preact/hooks";
import Dropdown from "../../../components/ui/Content/Dropdown/index.tsx";
import LogoGroupComponent from "../../../components/ui/Content/LogoGroup/index.tsx";

function ParentComponent({ title, dropdownText, arrowIcon, button, logos }) {
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleCategoryChange = (category: string) => {
        console.log(`[ParentComponent] Categoria selecionada: ${category}`);
        setSelectedCategory(category);
    };

    console.log("[ParentComponent] Categoria atual:", selectedCategory);

    return (
        <div className="w-full flex flex-col items-center">
            <Dropdown
                dropdownText={dropdownText}
                arrowIcon={arrowIcon}
                button={button}
                onCategoryChange={handleCategoryChange}
            />
            <LogoGroupComponent
                title={title}
                logos={logos}
                selectedCategory={selectedCategory}
            />
        </div>
    );
}

export default ParentComponent;