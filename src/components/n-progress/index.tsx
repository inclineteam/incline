// from @quasarwork/qwik-city-nprogress npm package
import { component$, useStyles$, useTask$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import NProgress from 'nprogress'
import styles from './progress.css?inline'
import NProgressStyles from 'nprogress/nprogress.css?inline'

const NProgressBar = component$(() => {
	NProgress.configure({ showSpinner: false })

	const location = useLocation()
	
	useStyles$(NProgressStyles + styles)

	useTask$(({track}) => {
		const isNavigating = track(() => location.isNavigating)

		isNavigating ? NProgress.start() : NProgress.done()
	})

	return (
		<div />
	)
})

export default NProgressBar