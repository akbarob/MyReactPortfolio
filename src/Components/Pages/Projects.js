import {Card,Badge, Button} from 'react-bootstrap'
import { Info } from '../Info'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
export default function Projects(props){
    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.5
          }
        }
      }
      
      const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
      }
    
    const proj = Info.map( item =>{
        console.log(item.skills)
        return(
            <motion.div 
               
                key={item.id} className='col-12 col-md-5 col-lg-3 mx-auto text-center my-5'>
                <a href={item.website} target={"_blank"} rel="noopener noreferrer"  className={props.setTheme.a} 
                initial="hidden" animate="show"  variants={container}>

                    <motion.Card  className={props.setTheme.card} variants={item}>
                        <Card.Img src={item.image}/>
                        <Card.Body className='cardbody rounded'>
                            <Card.Title> {item.name}</Card.Title>
                            <Badge pill bg='danger' className='mx-1'>{item.skills.react}</Badge> 
                            <Badge pill bg='danger' className='mx-1'>{item.skills.redux}</Badge> 
                            <Badge pill bg='danger' className='mx-1'>{item.skills.bs}</Badge>
                            <Badge pill bg='danger' className='mx-1'>{item.skills.rest}</Badge>
                            <Badge pill bg='danger' className='mx-1'>{item.skills.firebase}</Badge>  
                            <Badge pill bg='danger' className='mx-1'>{item.skills.css}</Badge>  
 
                        </Card.Body>

                    </motion.Card>
                </a>

                <div className='my-2 mydiv'>
                        <a href={item.source} target={"_blank"} rel="noopener noreferrer" className={props.setTheme.projectLink} >
                            <h3>&lt;Source Code/&gt;</h3>
                        </a> 
                </div>
            </motion.div>
            
        )
    })
    return(
        <motion.div 
            initial={{opacity:0, width:0}}
            animate={{opacity:1, width:"100%"}}
            exit={{opacity:0, x:window.innerWidth, transition:{duration:0.5}}}
            className='container  row mx-auto align-items-center'
            style={{minHeight: "85vh"}}
            >
            {proj}
            
        </motion.div>
    )
}