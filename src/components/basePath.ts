let prefix:string = ""
if (process.env.NODE_ENV === 'production') {
    prefix = "/x-commerce-project-front"
}

export { prefix };