import { useDispatch } from 'react-redux';
import axiosInstance from '../API/axiosInstance';
import { setIsLoading } from '../redux/useProjectSlice';
import { Bounce, toast } from 'react-toastify';

const useProjectService = () => {
  const dispatch = useDispatch();

  // GET ALL PROJECT
  const getAllProject = async () => {
    try {
      const response = await axiosInstance.get('/projects');
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message, {
        position: 'bottom-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: 'dark',
        transition: Bounce,
      });
    }
  };

  // POST PROJECT
  const createProject = async (data) => {
    try {
      dispatch(setIsLoading(true));
      const response = await axiosInstance.post('/projects', data);
      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message, {
        position: 'bottom-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: 'dark',
        transition: Bounce,
      });
    }
  };

  // GET PROJECT ID AND TASK
  const getProjectID = async (id) => {
    try {
      const response = await axiosInstance.get(`/projects/${id}/tasks`);
      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message, {
        position: 'bottom-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: 'dark',
        transition: Bounce,
      });
    }
  };

  // POST TASK
  const createTask = async (data) => {
    try {
      dispatch(setIsLoading(true));
      const response = await axiosInstance.post(`/projects/${data.id}/tasks`, {
        name: data.name,
        status: data.status,
      });
      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message, {
        position: 'bottom-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: 'dark',
        transition: Bounce,
      });
    }
  };

  // PUT TASK / EDIT TASK STATUS
  const editTaskStatus = async (data) => {
    try {
      dispatch(setIsLoading(true));
      const response = await axiosInstance.put(`/tasks/${data.id}`, {
        status: data.status,
      });
      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message, {
        position: 'bottom-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: 'dark',
        transition: Bounce,
      });
    }
  };

  return { getAllProject, createProject, getProjectID, createTask, editTaskStatus };
};

export default useProjectService;
