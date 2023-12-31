import { Stack } from "@mui/material"
import { categories } from "../utils/contants"


const Sidebar = ({selectedCatagory, setSelectedCategory}) => {
  return (
    <Stack direction="row" sx={{ overflowY:"auto", height: { sx:'auto', md:'95%'}, flexDirection: {md: 'column'} }} >
        {categories.map((category) => (
            <button
            className="category-btn"
            onClick={() => setSelectedCategory(category.name)}
            style={{ background: category.name === selectedCatagory && '#FC1503', color: 'white' }}
            key={category.name}
            >
                <span style={{ color: category.name === selectedCatagory ? 'white' : 'red', marginRight: '15px' }}>{category.icon}</span>
                <span style={{ opacity: category.name === selectedCatagory ? '1' : '0.8' }}>{category.name}</span>
            </button>
        ))}
    </Stack>
    )
}

export default Sidebar