import { useCallback, useState, useRef } from 'react';
import Flags from './Flags';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useDropzone } from 'react-dropzone';

import '../App.css'

const museBox = {
  width: '300%',
  height: 300,
	overflow: 'hidden'
};

const flagBox = {
	display: 'grid',
  width: 150,
  height: 150,
	overflow: 'hidden'
}

const img = {
  display: 'inline-block',
  width: '100%',
  height: '100%',
	objectFit: 'cover'
}

export default function Muse() {
	const [museName, 		setMuseName] 		= useState('');
	const [museImg, 		setMuseImg]  		= useState(['']);
	const [flag1Img, 		setFlag1]  			= useState(['']);
	const [flag2Img, 		setFlag2]  			= useState(['']);
	const [flag3Img, 		setFlag3]  			= useState(['']);
	const [flag4Img, 		setFlag4]  			= useState(['']);
	const [modal1Open, 	setModal1Open] 	= useState(false);
	const [modal2Open, 	setModal2Open] 	= useState(false);
	const [modal3Open, 	setModal3Open] 	= useState(false);
	const [modal4Open, 	setModal4Open] 	= useState(false);

  const { getRootProps:getMuseRootProps, getInputProps:getMuseInputProps, open } = useDropzone({ 
		onDrop: useCallback(acceptedFiles => {
			setMuseImg(acceptedFiles.map(file => URL.createObjectURL(file)))
		}, [setMuseImg])
	});

	const { getRootProps:getFlag1RootProps, getInputProps:getFlag1InputProps } = useDropzone({ 
		noClick: true,
		onDrop: useCallback(acceptedFiles => {
			setFlag1(acceptedFiles.map(file => URL.createObjectURL(file)))
		}, [setFlag1])
	});

	const { getRootProps:getFlag2RootProps, getInputProps:getFlag2InputProps } = useDropzone({ 
		noClick: true,
		onDrop: useCallback(acceptedFiles => {
			setFlag2(acceptedFiles.map(file => URL.createObjectURL(file)))
		}, [setFlag2])
	});

	const { getRootProps:getFlag3RootProps, getInputProps:getFlag3InputProps } = useDropzone({ 
		noClick: true,
		onDrop: useCallback(acceptedFiles => {
			setFlag3(acceptedFiles.map(file => URL.createObjectURL(file)))
		}, [setFlag3])
	});

	const { getRootProps:getFlag4RootProps, getInputProps:getFlag4InputProps } = useDropzone({ 
		noClick: true,
		onDrop: useCallback(acceptedFiles => {
			setFlag4(acceptedFiles.map(file => URL.createObjectURL(file)))
		}, [setFlag4])
	});

	const handleSetFlag1 = (flag) => {
		setFlag1([flag]);
	}

	const handleSetFlag2 = (flag) => {
		setFlag2([flag]);
	}

	const handleSetFlag3 = (flag) => {
		setFlag3([flag]);
	}

	const handleSetFlag4 = (flag) => {
		setFlag4([flag]);
	}

	return(
		<section id='center'>
			<input 
				value={museName}
				placeholder='MUSE NAME'
				name="museName"
				onChange={e => setMuseName(e.target.value)}
			/>
			<Box sx={{ flexGrow: 2 }}>
				<Grid container spacing={0}>
					<Grid size={'auto'}></Grid>
					<Grid size={4}>
						<div {...getMuseRootProps()} style={museBox}>
							<input {...getMuseInputProps()}/>
							{ !museImg[0] && 
								<div style={{ 
									backgroundColor: '#fff',
									backgroundSize: 'cover',
									backgroundRepeat: 'no-repeat',
									backgroundPosition: 'center',
									display: 'inline-block',
									width: '100%',
									height: '100%'
								}}>
								</div>
							}
							<div style={{ 
								backgroundImage: `url(${museImg[0]})`,
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								backgroundPosition: 'center',
								display: 'inline-block',
								width: '100%',
								height: '100%'
							}}>
							</div>
						</div>
						
					</Grid>
					<Grid size={3}></Grid>
					<Grid size={3}></Grid>
					<Grid size={'auto'}>
						<Stack spacing={0}>
							<div {...getFlag1RootProps()} style={flagBox}>
								<img style={img} key={flag1Img[0]} src={flag1Img[0]} onClick={() => {
									setModal1Open(true);
								}} />
								<input {...getFlag1InputProps()} />
							</div>
							<div {...getFlag2RootProps()} style={flagBox}>
								<img style={img} key={flag2Img[0]} src={flag2Img[0]} onClick={() => {
									setModal2Open(true);
								}} />
								<input {...getFlag2InputProps()} />
							</div>
						</Stack>
					</Grid>
					<Grid size={'auto'}>
						<Stack spacing={0}>
							<div {...getFlag3RootProps()} style={flagBox}>
								<img style={img} key={flag3Img[0]} src={flag3Img[0]} onClick={() => {
									setModal3Open(true);
								}} />
								<input {...getFlag3InputProps()} />
							</div>
							<div {...getFlag4RootProps()} style={flagBox}>
								<img style={img} key={flag4Img[0]} src={flag4Img[0]} onClick={() => {
									setModal4Open(true);
								}} />
								<input {...getFlag4InputProps()} />
							</div>
						</Stack>
					</Grid>
					<Grid size={3}></Grid>
				</Grid>
			</Box>
			{modal1Open && (
				<Flags 
					setModalOpen={setModal1Open}
					setFlag={handleSetFlag1}
				/>
			)}
			{modal2Open && (
				<Flags 
					setModalOpen={setModal2Open}
					setFlag={handleSetFlag2}
				/>
			)}
			{modal3Open && (
				<Flags 
					setModalOpen={setModal3Open}
					setFlag={handleSetFlag3}
				/>
			)}
			{modal4Open && (
				<Flags 
					setModalOpen={setModal4Open}
					setFlag={handleSetFlag4}
				/>
			)}
		</section>
  )
}