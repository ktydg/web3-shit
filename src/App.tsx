import { useRef } from 'react'
import { Separator } from './components'
import Intro from './sections/Intro.mdx'
import Metaverse from './sections/Metaverse.mdx'
import Learning from './sections/Learning.mdx'
import End from './sections/End.mdx'

function App() {
	const sections = [
		{
			id: 'start',
			title: 'Введение',
			text: <Intro />,
		},
		{
			id: 'chapter-1',
			title: 'Мeтавселенные (Metaverse/Metaspace)',
			text: <Metaverse />,
		},
		{
			id: 'chapter-2',
			title: 'Интернет-технологии в обучении',
			text: <Learning />,
		},
		{
			id: 'end',
			title: 'Заключение',
			text: <End />,
		},
	]

	const refs = useRef<{ [key: string]: HTMLElement | null }>({})
	const handleScrollToSection = (id: string) => {
		refs.current[id]?.scrollIntoView({ behavior: 'smooth' })
	}

	const UpRef = useRef<HTMLHeadingElement>(null)
	const handleScrollUp = () => {
		UpRef.current?.scrollIntoView({ behavior: 'smooth' })
	}

	return (
		<main
			ref={UpRef}
			className='w-[1000px] mx-auto flex relative py-10 flex-col text-'
		>
			<h1 className='text-center pb-6'>Оглавление</h1>
			<nav className='pl-10 h-64 justify-between flex flex-col'>
				{sections.map(({ id, title }) => (
					<li
						key={id}
						className='cursor-pointer hover:text-3xl hover:pt-5'
						onClick={() => handleScrollToSection(id)}
					>
						{title}
					</li>
				))}
			</nav>

			{sections.map(({ id, title, text }) => (
				<article key={id}>
					<Separator />
					<h1
						id={id}
						ref={(element: HTMLDivElement) => (refs.current[id] = element)}
						className='text-center pb-6'
					>
						{title}
					</h1>
					{text}
				</article>
			))}

			<button
				className='rounded-full left-10 bottom-10 p-0 size-16 fixed text-4xl'
				onClick={handleScrollUp}
			>
				^
			</button>
		</main>
	)
}

export default App
