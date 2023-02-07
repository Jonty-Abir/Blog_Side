import data from "../data";

export default function handler(req,res){
    const {popularPostId}=req.query;
    const {Popular}= data;
    if(Popular){
        const myPopularPost= Popular.find((element)=> element.id == popularPostId);
        if(myPopularPost) return res.status(200).json({data: myPopularPost});
        return res.status(404).json({error:"Popular Post not found"});
    };
    res.status().json({error:"Data not found!"});
};