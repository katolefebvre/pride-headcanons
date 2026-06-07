import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const flags = import.meta.glob("../assets/*.{avif,webp,png,jpg,jpeg,svg}", { 
    eager: true,
    import: 'default' 
  });
const flagsList = Object.values(flags);

const modalStyle = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: '#1f1f1f',
	border: '2px solid #000',
	boxShadow: 24,
	pt: 2,
	px: 4,
	pb: 3
}

const thumb = {
  display: 'inline-flex',
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'inline-flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'inline-block',
  width: '100%',
  height: '100%'
}

function Flags({ setModalOpen, setFlag }) {
	const handleImgClick = (img) => {
		setFlag(img);
		setModalOpen(false);
	}

	return (
		<div>
			<Modal
				open={setModalOpen}
				onClose={setModalOpen}
				aria-labelledby="parent-modal-title"
				aria-describedby="parent-modal-description"
			>
				<Box sx={{ ...modalStyle, width: 400 }}>
					<button
						onClick={() => setModalOpen(false)}
						className='counter' 
						aria-label="Close modal"
					>X</button>
					<button
						onClick={() => handleImgClick(null)}
						className='counter' 
						aria-label="Close modal"
					>CLEAR</button>
					<section>
						<h2>FLAGS SELECTION</h2>
						{flagsList.map((url, index) => (
							<div style={thumb} key={index}>
								<div style={thumbInner}>
									<img key={index} src={url} alt={url} style={img} onClick={() => handleImgClick(url)}/>
								</div>
							</div>
						))}
					</section>
				</Box>
			</Modal>
		</div>
	)
}

export default Flags
