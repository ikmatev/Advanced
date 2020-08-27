function solve() {
    class Post{
        constructor(title, content){
            this.title = title;
            this.content = content;
        }
        toString(){
          return  `Post: ${this.title}` + '\n' + `Content: ${this.content}`
        }
    }
    class SocialMediaPost extends Post{
        constructor(title, content, likes, dislikes ){
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }
        addComment(comment){
            this.comments.push(comment);
        }
        toString(){
            let comments = ''
            if (this.comments.length > 0) {
                comments += `\nComments:`+ '\n'
                comments += this.comments.map(x => ' * ' + x).join('\n');                
            }
            return  super.toString() + '\n' +
                    `Rating: ${this.likes - this.dislikes}` +
                     comments;
            
        }
    }
    class BlogPost extends Post{
        constructor(title, content, views ){
            super(title, content );
            this.views = views;
        }
        view(){
            this.views++;
            return this;
        }
        toString(){
            return super.toString() + '\n' + `Views: ${this.views}`
        }
    }
    return {Post, SocialMediaPost, BlogPost}
}