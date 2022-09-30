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

      const boxVariant = {
        visible: { opacity: 1, scale: 1.1, x:0, transition:{duration:0.8}},
        hidden: { opacity: 0, scale: 0, x:'-50%' },
    }
    
    const proj = Info.map( item =>{
        console.log(item.skills)
        return(
            <motion.div 
            variants={boxVariant}
            initial="hidden"
            whileInView='visible'
                key={item.id} className='col-10 col-md-5 col-lg-5 mx-auto text-center my-5 pt-5'>
                <a href={item.website} target={"_blank"} rel="noopener noreferrer"  className={props.setTheme.a} 
            >
                    <motion.Card  
                    whileTap={{ scale: 0.9 }}
                   className={props.setTheme.card} >
                        <Card.Img src={item.image}/>
                        <Card.Body className='cardbody rounded'>
                            <Card.Title> {item.name}</Card.Title>
                            <Badge pill bg='danger' className='mx-1'>{item.skills.react}</Badge> 
                            <Badge pill bg='danger' className='mx-1'>{item.skills.redux}</Badge> 
                            <Badge pill bg='danger' className='mx-1'>{item.skills.bs}</Badge>
                            <Badge pill bg='danger' className='mx-1'>{item.skills.rest}</Badge>
                            <Badge pill bg='danger' className='mx-1'>{item.skills.firebase}</Badge>  
                            <Badge pill bg='danger' className='mx-1'>{item.skills.css}</Badge>  
                            <Badge pill bg='danger' className='mx-1'>{item.skills.heroku}</Badge>  
                            <Badge pill bg='danger' className='mx-1'>{item.skills.typeScript}</Badge>  

                        </Card.Body>

                    </motion.Card>
                </a>

                <div className='my-3 mydiv'>
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