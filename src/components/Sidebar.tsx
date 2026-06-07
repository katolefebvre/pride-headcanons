import Flags from './Flags'

const Sidebar = () => {
	return (
		<div className="flex">
			<div
				className={`"w-72" : "w-20 "`}
			>
				<div className="flex gap-x-4 items-center">
					<h2
						className={`text-white origin-left font-medium text-xl duration-200 ${
							!open && "scale-0"
						}`}
					>
						FLAGS
					</h2>
				</div>
				<Flags />
			</div>
		</div>
	)
}
export default Sidebar