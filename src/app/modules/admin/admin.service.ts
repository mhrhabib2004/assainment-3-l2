import { Blogs } from "../blog/blog.model";
import { User } from "../user/user.model";

// Blocked user
const userBlockWithAdminFromDB = async (userId: string) => {

    const user = await User.findById(userId);

    // Check User Find 
    if (!user) {
        throw new Error('This user is not found !')
    }

    // Check User Admin
    if (user.role === 'admin') {
        throw new Error('This user is an admin. Not Alow Blocked')
    }

    // Check User Already Blocked
    if (user.isBlocked) {
        throw new Error('User is already blocked!')
    }

    const result = await User.findOneAndUpdate(
        { _id: userId },
        { isBlocked: true },
        {
            new: true,
        },
    )
    return result;
};

// unBlocked user
const userunBlockWithAdminFromDB = async (userId: string) => {

    const user = await User.findById(userId);

    // Check User Find 
    if (!user) {
        throw new Error('This user is not found !')
    }

    // Check User Admin
    if (user.role === 'admin') {
        throw new Error('This user is an admin. Not Alow unBlocked')
    }

    // Check User Already Blocked
    if (!user.isBlocked!) {
        throw new Error('User is already unBlocked!')
    }

    const result = await User.findOneAndUpdate(
        { _id: userId },
        { isBlocked: false },
        {
            new: true,
        },
    )
    return result;
};

// Delete Blog By Admin
const deleteBlogByAdminFromDB = async (id: string) => {

    const blog = await Blogs.findById(id);

    // Check blog Exist
    if (!blog) {
        throw new Error('This blog is already deleted !')
    }

    const result = Blogs.findByIdAndDelete(id)
    return result;
};



export const AdminServices = {
    userBlockWithAdminFromDB,
    userunBlockWithAdminFromDB,
    deleteBlogByAdminFromDB

};