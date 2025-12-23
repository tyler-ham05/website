import gitscribe from '../assets/gitscribe.png'
import gr_ascent from '../assets/ascent.png'
import slug_swole from '../assets/slugswole.png'

const Entry = ({title, image, text}) => {
    return(
        <>
        <h1>{title}</h1>
        <img src = {image} alt = "image supposed to be here"/>
        <p>{text}</p>
        </>

    )
}

function Projects(){
    const title = "This Website"
    const image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsU9UBpOgH7DrwytEugrdoUsZGwXc10ZThSw&s" 
    const text = "Built with React, this website is the first of many projects I will showcase on my website! Additionally, I will log any updates/improvements made to this website here as well. "
    return(
<section className="container mx-auto px-4 py-16 md:py-24">
<h2 className="mb-12 text-3xl font-bold tracking-tight md:text-4xl text-balance">Featured Projects</h2>
<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
    <ProjectCard
    title="GitScribe"
    description="Informative tool for analyzing open-source repository contributions"
    image={gitscribe}
    fullDescription="A web application to track the impact that contributors have on open-source repositories through their commits."
    tags={["React", "Express.js", "MongoDB", "Anthropic API"]}
    link="https://example.com"
    />
    <ProjectCard
    title="Unlearning via Gradient Ascent"
    description="Comprehensive testing and findings from a Gradient Ascent based unlearning algorithm"
    image={gr_ascent}
    fullDescription="Implementation of a Gradient Ascent unlearning algorithm built on a Transformer classification model. Accompanied by paper explaining application, methodology, and results of the study especially in reference to runtime and hyperparameters"
    tags={["PyTorch", "MatPlotLib", "Google Colab"]}
    link="https://example.com"
    />
    <ProjectCard
    title="SlugSwole"
    description="Real-time popular times analytics at the UCSC Gym"
    image={slug_swole}
    fullDescription="Built using webscraped facility data and a Cloud Firestore database, SlugSwole allows users to track the busyness of the UCSC gym weekly to better coordinate gym visits"
    tags={["Flutter","Python + BeautifulSoup4", "Google Cloud Projects",]}
    link="https://example.com"
    />
</div>
</section>
    )
}

"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react"

export function ProjectCard({ title, description, image, fullDescription, tags = [], link }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="overflow-hidden rounded-lg border border-[#111111] bg-card text-card-foreground shadow-sm transition-all hover:shadow-lg">
      <div className="relative aspect-video w-full overflow-hidden bg-muted">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <div className="flex flex-col space-y-1.5 p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2 flex-1">
            <h3 className="text-2xl font-semibold leading-none tracking-tight text-balance">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
          </div>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title}`}
              className="inline-flex h-10 w-10 items-center justify-center shrink-0 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-md bg-[#7b7b7b]/50 px-2 py-1 text-xs font-medium text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      {fullDescription && (
        <>
          <div className="p-6 pt-0 space-y-4">
            {isExpanded && (
              <div className="text-sm leading-relaxed text-muted-foreground animate-in fade-in slide-in-from-top-2">
                {fullDescription}
              </div>
            )}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center justify-center w-full rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground h-9 px-3 transition-colors"
            >
              {isExpanded ? (
                <>
                  Show Less <ChevronUp className="ml-2 h-4 w-4" />
                </>
              ) : (
                <>
                  Read More <ChevronDown className="ml-2 h-4 w-4" />
                </>
              )}
            </button>
          </div>
        </>
      )}
    </div>
  )
}


export default Projects