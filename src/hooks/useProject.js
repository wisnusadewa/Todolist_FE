import { useMutation, useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { data } from 'react-router';
import { Bounce, toast } from 'react-toastify';
import { setIsLoading } from '../redux/useProjectSlice';
import useProjectService from './useProjectService';
import { useQueryClient } from '@tanstack/react-query';

const useProject = () => {
  const { createProject, getProjectID, createTask, editTaskStatus } = useProjectService();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  // POST PROJECT QUERY
  const createProjectQuery = useMutation({
    mutationKey: ['projects'],
    mutationFn: createProject,
    onSuccess: (data) => {
      if (data) {
        dispatch(setIsLoading(false));
        queryClient.invalidateQueries(['projects']);
        toast('project berhasil dibuat', {
          position: 'bottom-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: 'light',
          transition: Bounce,
        });
      }
    },
  });

  // GET PROJECT ID
  const getProjectIDQuery = (id) => {
    return useQuery({
      queryKey: ['projectID', id],
      queryFn: () => getProjectID(id),
      retry: false,
      enabled: !!id, // jika ada ID
    });
  };

  // POST TASK QUERY
  const createTaskQuery = useMutation({
    mutationKey: ['tasks'],
    mutationFn: createTask,
    onSuccess: (data) => {
      if (data) {
        dispatch(setIsLoading(false));
        queryClient.invalidateQueries(['tasks']);
        toast('Task berhasil dibuat', {
          position: 'bottom-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: 'light',
          transition: Bounce,
        });
      }
    },
  });

  // EDIT TASK QUERY
  const editTaskQuery = useMutation({
    mutationKey: ['tasks'],
    mutationFn: editTaskStatus,
    onSuccess: (data) => {
      if (data) {
        dispatch(setIsLoading(false));
        queryClient.invalidateQueries(['tasks']);
        toast('Status berhasil diperbarui', {
          position: 'bottom-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: 'light',
          transition: Bounce,
        });
      }
    },
  });

  return { createProjectQuery, getProjectIDQuery, createTaskQuery, editTaskQuery };
};

export default useProject;
